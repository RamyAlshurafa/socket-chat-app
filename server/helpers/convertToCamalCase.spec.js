const { expect } = require("chai");
const {
  convertStringToCamelCase,
  convertObjectToCamelCase,
  convertToCamalCase,
} = require("./index");

describe("convert to camel case functions", () => {
  describe("convertStringToCamelCase", () => {
    it("should return converted string to camel case", () => {
      expect(1).to.equal(1);
      const snakeText = "im_snake_case";
      const expectedText = "imSnakeCase";
      const convertedText = convertStringToCamelCase(snakeText);
      expect(convertedText).to.equal(expectedText);
      expect(convertedText).to.not.contains("_");

      const snakeWithCapitals = "firts_Name";
      const expextedSnakeWithCapitals = "firtsName";
      const convertedTextWithCapital = convertStringToCamelCase(snakeWithCapitals);
      expect(convertedTextWithCapital).to.equal(expextedSnakeWithCapitals);
    });
  });

  describe("convertToCamalCase", () => {
    it("should return converted object's key to camel case", () => {
      const snakeObject = {
        first_name: "john",
        last_name: "doe",
        alreadyCamel: "camel",
      };

      const expectedObject = {
        firstName: "john",
        lastName: "doe",
        alreadyCamel: "camel",
      };
      const convertedObject = convertObjectToCamelCase(snakeObject);
      expect(convertedObject).to.eql(expectedObject);
    });
  });

  describe("convertToCamalCase", () => {
    it("should convert object's keys to camel case", () => {
      const snakeObject = {
        first_name: "john",
        last_name: "doe",
        alreadyCamel: "camel",
      };

      const expectedObject = {
        firstName: "john",
        lastName: "doe",
        alreadyCamel: "camel",
      };

      const convertedObject = convertObjectToCamelCase(snakeObject);
      expect(convertedObject).to.eql(expectedObject);
    });

    it("should convert array of object's keys to camel case", () => {
      const snakeArray = [{
        first_name: "john",
        last_name: "doe",
        alreadyCamel: "camel",
      }, {
        first_name: "red",
        last_name: "john",
        alreadyCamel: "camel",
      }];

      const expectedArray = [{
        firstName: "john",
        lastName: "doe",
        alreadyCamel: "camel",
      }, {
        firstName: "red",
        lastName: "john",
        alreadyCamel: "camel",
      }];

      const convertedArray = convertToCamalCase(snakeArray);
      expect(convertedArray).to.deep.equal(expectedArray);
    });

    it("should convert text to camel case", () => {
      const snakeText = "im_snake_case";
      const expectedText = "imSnakeCase";
      const convertedText = convertToCamalCase(snakeText);
      expect(convertedText).to.equal(expectedText);
    });
  });
});
