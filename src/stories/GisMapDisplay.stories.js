import Display from "../components/GisMap/Display.jsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dubhe/Display",
  component: Display,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    markerColor: {
      control: {
        type: "color",
        presetColors: ["red", "green"],
      },
    },
    zoom: {
      control: { type: "range", min: 8, max: 20, step: 1 },
    },
    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const chengdu = {
  args: {
    lng: 104.08132687221507,
    lat: 30.651664769162764,
    zoom: 14,
    width: "400px",
    height: "400px",
  },
};

export const display = {
  args: {
    lng: 104.08132687221507,
    lat: 30.651664769162764,
  },
};
