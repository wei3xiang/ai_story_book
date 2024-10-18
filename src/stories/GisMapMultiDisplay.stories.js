import MultiDisplay from "@/components/GisMap/MultiDisplay.jsx";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Dubhe/MultiDisplay",
  component: MultiDisplay,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
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
    mainData: {
      lng: 104.08132687221507,
      lat: 30.651664769162764,
      text: "西金中心",
    },
    data: [
      {
        lng: 104.08263434873237,
        lat: 30.651271486820676,
        text: "李豆汤",
      },
      {
        lng: 104.07623744795808,
        lat: 30.64580629681906,
        text: "冒菜",
      },
      {
        lng: 104.08762224488811,
        lat: 30.6511578713384,
        text: "炒面",
      },
    ],
    zoom: 14,
    width: "400px",
    height: "400px",
  },
};

export const display = {
  args: {
    mainData: {
      lng: 104.08132687221507,
      lat: 30.651664769162764,
      text: "西金中心",
    },
    data: [],
  },
};
