import GenerateImage from "./utils/GenerateImage";

function main() {
  const imageGenerator = new GenerateImage();

  imageGenerator.generateGradientImage("gradient");
  imageGenerator.generateCircleImage("circle");
  imageGenerator.generateSquareImage("square");
}

main();
