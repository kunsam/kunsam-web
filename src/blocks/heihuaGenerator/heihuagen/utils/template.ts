import { Word, PartOfSpeech } from "../types";
import { randomGetItem } from "./common";
import { getAllWords } from "../index";

/** 根据词性随机返回一个词, 并从数组中将其删掉 */
function randomPickAndDrop(words: Word[], posStr: string): Word {
  const posList: PartOfSpeech[] = posStr
    .split(",")
    .map((pos: any) => PartOfSpeech[pos] as any);
  const filtered = words.filter((word) =>
    word.partOfSpeech.some((pos) => posList.includes(pos))
  );

  const word = randomGetItem(filtered);

  words.some((w, i) => {
    if (w.text === word.text) {
      words.splice(i, 1);
      return true;
    }
  });

  return word;
}

// 根据模板, 生产句子
function generateSentence(tpl: string): string {
  let res = tpl;
  const regexp = /\{([a-z,]+)\}(?=[^-]|$)/;
  let allWords = getAllWords();

  // 只出现一次的词汇
  while (regexp.test(res)) {
    res = res.replace(regexp, (match, p1) => {
      const word = randomPickAndDrop(allWords, p1);
      return word.text;
    });
  }

  // 带序号, 需要多次出现的词汇
  const indexedReplacements: string[] = [];

  for (let i = 0; i < 10; i++) {
    let indexedRegExp = RegExp("{([a-z,]+)}-" + i, "g");
    res = res.replace(indexedRegExp, (match, p1) => {
      if (indexedReplacements[i]) return indexedReplacements[i];

      const word = randomPickAndDrop(allWords, p1);
      indexedReplacements[i] = word.text;
      return indexedReplacements[i];
    });
  }

  return res;
}

export { generateSentence };
