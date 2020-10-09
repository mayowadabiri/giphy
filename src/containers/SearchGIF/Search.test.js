import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { connect } from "react-redux";
import SearchGIF from "./SearchGIF";
import Search from "../Search/Search";

export const searchGIFconnect = connect(SearchGIF);

configure({ adapter: new Adapter() });

describe("<Seach />", () => {
  it("should contain search field", () => {
    const wrapper = shallow(<searchGIFconnect />);
    expect(wrapper.find(Search));
  });
});
