import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SocialIcons from "../SocialIcons.vue";

describe("SocialIcons", () => {
  it("renders properly", () => {
    const wrapper = mount(SocialIcons);
    expect(wrapper.text()).toContain("socialIcons");
  });
});
