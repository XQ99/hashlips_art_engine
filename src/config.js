const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Flumps";
const description = "2,222 Flumps originating from the planet Xieh DeFor'i have landed on the blockchain securing their new forever home. Let the fun commence.";
const baseUri = "ipfs://QmPeTKTvbvRF7Vs4C5uZkYKkJe2bfsr1fLwW8JMd1XsGrF";

const solanaMetadata = {
  symbol: "FLMP",
  seller_fee_basis_points: 500, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.twitter.com/FlumpsNFT",
  creators: [
    {
      address: "0x9Ddd8bec2d73e1d2F47D66ae7bcde38603Ef3E8d",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 2222,
    layersOrder: [
      { name: "Background" },
      { name: "Marking" },
      { name: "Body" },
      { name: "Horn" },
      { name: "Glyph" },
      { name: "Gender" },
      { name: "Eyes" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  creator: "Ghostli",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 20,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
