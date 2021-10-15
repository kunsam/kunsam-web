import { PartOfSpeech } from "./types";
import { getAllWords } from "./words";
import { getRandomOneFromWords, getWordsByPartOfSpeech } from "./utils/word";
import { randomGetItem } from "./utils/common";
import { generateSentence } from "./utils/template";
import qZoneTpls from "./templates/qzone";
import marketingTpls from "./templates/marketing";

function randomGetWord(
  options: {
    length?: number;
    partOfSpeech?: PartOfSpeech[] | PartOfSpeech;
  } = {}
) {
  return getRandomOneFromWords(getAllWords(), options);
}

const { n, vt, vi, adj } = PartOfSpeech;
const getAdjs = () =>
  getWordsByPartOfSpeech(getAllWords(), [adj]).map((word) => word.text);
const getNouns = () =>
  getWordsByPartOfSpeech(getAllWords(), [n]).map((word) => word.text);
const getVerbs = () =>
  getWordsByPartOfSpeech(getAllWords(), [vi, vt]).map((word) => word.text);

function getSentenceMaker(templates: string[]) {
  return () => generateSentence(randomGetItem(templates));
}

const randomQZoneSentence = getSentenceMaker(qZoneTpls);
const randomMarketingSentence = getSentenceMaker(marketingTpls);

type TemplateType = "qzone" | "marketing";

function randomSentence(type: TemplateType) {
  let templates = qZoneTpls;
  if (type === "marketing") templates = marketingTpls;
  return generateSentence(randomGetItem(templates));
}

// TODO 接狗屁不通生成器

export {
  randomGetWord,
  getAllWords,
  getVerbs,
  getNouns,
  getAdjs,
  randomQZoneSentence,
  randomMarketingSentence,
  randomSentence,
};
