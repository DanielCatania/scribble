import Text from "@/patterns/Text";
import React from "react";

export default function HomeScreen() {
  return (
    <div className="text-center">
      <Text.Display as="h1" className="text-red-500">
        Text Display
      </Text.Display>
      <Text.HeadingOne as="h2" className="text-blue-500">
        Text Heading One
      </Text.HeadingOne>
      <Text.HeadingTwo as="h3" className="text-green-500">
        Text Heading Two
      </Text.HeadingTwo>
      <Text.BodyOne as="h4" className="text-yellow-500">
        Text Body One
      </Text.BodyOne>
      <Text as="h5" className="text-purple-500">
        Text Body Two
      </Text>
      <Text>Text Default</Text>
    </div>
  );
}
