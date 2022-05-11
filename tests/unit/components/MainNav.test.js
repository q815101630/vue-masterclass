import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);

    const expectedCompanyName = "Beebabo Careers";
    expect(wrapper.text()).toMatch(expectedCompanyName);
  });
});
