/**
 * @jest-environment jsdom
 */

import { shallow } from "enzyme";
import React from "react";
import { Dropdown } from "../Dropdown";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Dropdown", () => {
  test("should render", () => {
    const wrapper = shallow(
      <Dropdown button={<button />} children={<div />} />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper.find("button").isEmptyRender()).toBeFalsy();
  });
  test("should render (snapshot)", () => {
    const wrapper = shallow(
      <Dropdown button={<button />} children={<div />} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
