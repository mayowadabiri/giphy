import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { connect } from "react-redux";
import GIFItems from "./GIFItems";
import GifItem from "../../components/GIFItem/GIFItem";

configure({ adapter: new Adapter() });

export const GifItemsWrapper = connect(GIFItems);

describe("<SearchGIF />", () => {
  it("should contain search field", () => {
    // const gifs = [
    //   { id: 1, title: "gif 1" },
    //   { id: 2, title: "gif 1" },
    //   { id: 3, title: "gif 1" },
    //   { id: 4, title: "gif 1" },
    //   { id: 5, title: "gif 1" },
    //   { id: 6, title: "gif 1" },
    //   { id: 7, title: "gif 1" },
    //   { id: 8, title: "gif 1" },
    //   { id: 9, title: "gif 1" },
    //   { id: 10, title: "gif 1" },
    // ];
    const wrapper = shallow(<GifItemsWrapper />);
    expect(wrapper.find(GifItem))
  });
});
