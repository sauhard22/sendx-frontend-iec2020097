# Project Components
Welcome to the documentation for our project components. Below is a list of key components used in the project.

## 📖 Table of Contents
- [🔍 **Breadcrumb**](#-breadcrumb)
- [📌 **BreadcrumbHeader**](#-breadcrumbheader)
- [🔘 **Button**](#-button)
- [🎨 **DesignCard**](#-designcard)
- [🚀 **Footer**](#-footer)
- [⚙️ **FormRadioButton**](#-form-radio-button)
- [👏 **Navbar**](#-navbar)
- [🧭 **NavbarHeaders**](#-navbarheaders)
- [🌐 **NavigationHeader**](#-navigationheader)
- [🔢 **NumberInput**](#-numberinput)
- [🎯 **TargetingForm**](#-targetingform)
- [🗂️ **TypeCard**](#-type-card)

---

## 🔍 Breadcrumb

The Breadcrumb Header component is a Vue.js component designed to display breadcrumb navigation in your web application. Breadcrumbs are a useful way to indicate the current page's location within the navigational hierarchy, allowing users to understand their position in the application.

![breadcrumb](https://github.com/sauhard22/readme/assets/73341891/08b5a5d4-ffb2-430d-b749-dd76e33481aa)

## Props

### `data` (`Object`, *required*)
An object containing the breadcrumb links and other configuration properties.

#### `icon` (`String`, *required*)
Icon to be displayed next to the current selected breadcrumb item.
Example: `"icon-park:right"`

#### `links` (`Array`, *required*)
An array of objects representing the breadcrumb links. Each object should have the following properties:

- **`label`** (`String`, *required*): The text label to be displayed for the breadcrumb link.
- **`showLeftIcon`** (`Boolean`, *optional*): Whether to show a left icon for the breadcrumb link. (Default: `false`)
- **`showRightIcon`** (`Boolean`, *optional*): Whether to show a right icon for the breadcrumb link. (Default: `true`)

### `selected` (`String`, *required*)
The name of the current route. This is used to determine which breadcrumb item is currently active

##### Props example:

```bash
const data = {
    icon: "icon-park:right",
    links: [
        {
            label: "Type",
            showLeftIcon: false,
            showRightIcon: true
        },
        {
            label: "Design",
            showLeftIcon: false,
            showRightIcon: true
        },
        {
            label: "Content",
            showLeftIcon: false,
            showRightIcon: true
        },
        {
            label: "Targeting",
            showLeftIcon: false,
            showRightIcon: true
        },
        {
            label: "Behaviour",
            showLeftIcon: false,
            showRightIcon: true
        },
        {
            label: "Success",
            showLeftIcon: false,
            showRightIcon: false
        }
    ]
}

cosnt selected = route.name

```

##### Example

```bash
<Breadcrumb :selected="route.name" :data="data" />
```

## 📌 BreadcrumbHeader

The single unit of breadcrumb component.

![breadcrumb_header](https://github.com/sauhard22/readme/assets/73341891/e29154b2-99ef-4e68-9218-2df829a720ff)

## Props

### `label` (`String`, *required*)
The text label to be displayed.

### `icon` (`String`, *required*)
The icon identifier to be displayed. Make sure to have the appropriate icon package installed or configured in your project.

### `showLeftIcon` (`Boolean`, *optional*)
Whether to show an icon on the left side of the label. Default is `false`.

### `showRightIcon` (`Boolean`, *optional*)
Whether to show an icon on the right side of the label. Default is `false`.

### `selected` (`String`, *required*)
The identifier for the currently selected item. This is used for dynamic styling based on the selected item.

### `index` (`Number`, *required*)
The index of the item in the list. Used for comparison with the `views` constant to determine styling based on the position.

##### Example

```bash
<BreadcrumbHeader :selected="selected" v-for="(item, i) in data.links" :icon="data.icon" :label="item.label"
        :index="i"    
        :showLeftIcon="item.showLeftIcon" :showRightIcon="item.showRightIcon" :key="i" />
```

## 🔘 Button
The Button component is a versatile Vue.js-based element that allows you to create customized buttons for your web application. 

![button](https://github.com/sauhard22/readme/assets/73341891/6bef4d8d-5942-496e-9992-8532ddc844a8)

## Props

### `label` (`String`, *required*)
The text label to be displayed.

### `buttonClass` (`String`, *optional*)
Additional custom CSS classes to be applied to the button. This allows for further customization of the button's appearance.

##### Example

```bash
<Button buttonClass="text-blue" label="Continue" />
```

## 🎨 DesignCard
The Design Card component is a Vue.js-based card element crafted for showcasing template options.

![design_card](https://github.com/sauhard22/readme/assets/73341891/2aaa4147-45e0-4985-87b8-1ea5037789b2)

## Props

### `name` (`String`, *required*)
The name or title of the design option.

### `imgSrc` (`String`, *required*)
The source URL of the image representing the design option.

### `id` (`String`, *required*)
A unique identifier for the design card.

##### Example

```bash
<DesignCard v-for="(item, i) in data" :name = "item.name" :imgSrc="item.img" :id="item.id" :key="i" />
```

## 🚀 Footer

The footer navigation of the pages/views

![footer](https://github.com/sauhard22/readme/assets/73341891/db57787e-f6c2-48c9-b24a-c149fb1d9a4f)

## Props

### `showBack` (`Boolean`, *required*)
The name or title of the design option.

## Events

### `handleBack`
Emitted when the "Go back" link is clicked. You can attach a method to handle the back action.

### `handleContinue` (`String`, *required*)
Emitted when the "Continue" button is clicked. You can attach a method to handle the continue action.

##### Example

```bash
<Footer :show-back="true" @handleBack="handleBack" @handleContinue="handleContinue" />
```

## ⚙️ Form Radio Button

The Form Radio Button component is a Vue.js-based element designed to represent a radio button within a form. It helps us to insert any this in our input label.

![form_radio_button](https://github.com/sauhard22/readme/assets/73341891/7e0191dc-4982-49cb-a06d-eadf9452dd8a)


## Props

### `beforeLabel` (`String`, *optional*)
Text to be displayed before the middle element.

### `afterLabel` (`String`, *optional*)
Text to be displayed after the middle element.

### `labelContainerCss` (`String`, *optional*)
Additional CSS classes for the label container.

### `name` (`String`, *required*)
The name attribute for the radio input.

### `id` (`String`, *required*)
The unique identifier for the radio input.

### `value` (`String`, *required*)
The value of the radio input.

### `modelValue` (`String`, *required*)
The model value for the radio input.

## Events

### `update:modelValue`
Emitted when the radio input value changes. Use this event to sync the `modelValue` prop with the input's value.

##### Example 

```bash
<FormRadioButton v-model="selected[3].id" name="3" value="3" id="3" label-container-css="flex-wrap" after-label="times"
                  before-label="If the visitor has successfully completed the action or the pop-up has been shown">
    <template #middleElement>
    </template>
</FormRadioButton>

```

## 🧭 NavbarHeaders
This component is for the headers present in the navbar.

![dropdown](https://github.com/sauhard22/readme/assets/73341891/f9834ca2-d882-4ada-889c-d7fadeff36d7)

## Props

### `label` (`String`, *required*)
The text label to be displayed in the component.

### `showIcon` (`Boolean`, *optional*)
Determines whether to display an icon next to the label. If set to `true`, the icon will be visible; if `false`, it will be hidden.

### `icon` (`String`, *optional*)
The icon identifier to be displayed. Make sure to have the appropriate icon package installed or configured in your project.

##### Example

```bash

const navbar_content = [
    {
        label: "Dashboard",
        showIcon: false
    },
    {
        label: "Campaigns",
        showIcon: true,
        icon: "mingcute:down-fill"
    },
    {
        label: "Audience",
        showIcon: true,
        icon: "mingcute:down-fill"
    },
    {
        label: "Automations",
        showIcon: true,
        icon: "mingcute:down-fill"
    },
]

<NavbarHeaders v-for="(item, i) in navbar_content" :label="item.label" :key="i" :icon="item.icon" :showIcon="item.showIcon" />
```

## 🔢 NumberInput

The Numeric Input component is a Vue.js-based input element that allows users to enter numeric values within a specified range. It includes optional increase and decrease buttons for easy value adjustment, making it ideal for various interactive applications. (It only accepts numbers)

![numberinput2](https://github.com/sauhard22/readme/assets/73341891/fe55d295-4ceb-4734-8ba2-95c809c47d3e)

![numberinput3](https://github.com/sauhard22/readme/assets/73341891/707cfe9c-8f24-4458-85f1-77008d7868db)

![NumberInput1](https://github.com/sauhard22/readme/assets/73341891/8b99f5da-9aed-427b-85f4-c61b46d91d22)

## Props

### `min` (`Number`, *required*)
The minimum allowed value for the input field.

### `max` (`Number`, *required*)
The maximum allowed value for the input field.

### `showStep` (`Boolean`, *optional*)
Determines whether the increase and decrease step buttons should be displayed. Default is `true`.

### `showPrecentage` (`Boolean`, *optional*)
Determines whether the input value represents a percentage. Default is `false`.

### `increaseStepIcon` (`String`, *optional*)
The icon identifier for the increase step button.

### `decreaseStepIcon` (`String`, *optional*)
The icon identifier for the decrease step button.

### `increaseStepContainerClass` (`String`, *optional*)
Additional CSS class for styling the increase step button container.

### `decreaseStepContainerClass` (`String`, *optional*)
Additional CSS class for styling the decrease step button container.

### `stepContainerClass` (`String`, *optional*)
Additional CSS class for styling the step buttons container.

### `fun` (`Function`, *required*)
A function to handle value changes. Should accept a numeric value as an argument.

### `defaultValue` (`String`, *optional*)
The default value displayed in the input field.

##### Example

```bash
<NumberInput :fun="targerting1Value" default-value="5" increase-step-container-class="h-[50%] flex justify-center items-center w-[15px] border-solid border-l-[2px] border-b-[1px]" decrease-step-container-class="h-[50%] flex justify-center items-center w-[15px] border-solid border-l-[2px] border-t-[1px]" />
```
## 🎯 TargetingForm

It helps to render anything inside it self providing the same style and code reusability. 

![targeting_form](https://github.com/sauhard22/readme/assets/73341891/4b0fbc0b-4f6b-4f3f-b24c-34fcd2da3335)

## Props

### `heading` (`String`, *required*)
The main heading or title of the section.

### `subHeading` (`String`, *optional*)
Optional subheading or additional information related to the section.

## Slots

## `children`
Render anything by mentioning the name #children.

##### Example

```bash
            <TargetingForm heading="Show the popup when visitor: ">
                <template #children>
                    <div class="flex flex-col gap-[20px]">
                        <FormRadioButton v-model="selected[1].id" value="1" name="1" id="1" before-label="Enters website" />
                        <FormRadioButton v-model="selected[1].id" value="2" name="1" id="2" before-label="Exits website" />
                        <FormRadioButton v-model="selected[1].id" value="3" name="1" id="3" after-label="seconds on website"
                            before-label="After">
                            <template #middleElement>
                                <NumberInput :fun="targerting1Value" default-value="50"
                                    step-container-class="flex flex-col justify-center pr-[10px]" :show-step="true"
                                    :show-precentage="true" />
                            </template>
                        </FormRadioButton>
                        <FormRadioButton v-model="selected[1].id" value="4" name="1" id="4" after-label="seconds on website"
                            before-label="After">
                            <template #middleElement>
                                <NumberInput :fun="targerting1Value" default-value="5"
                                    increase-step-container-class="h-[50%] flex justify-center items-center w-[15px] border-solid border-l-[2px] border-b-[1px]"
                                    decrease-step-container-class="h-[50%] flex justify-center items-center w-[15px] border-solid border-l-[2px] border-t-[1px]" />
                            </template>
                        </FormRadioButton>
                    </div>
                </template>
            </TargetingForm>
```


## 🗂️ Type Card

The custom card for making custom radio input.

![typecard](https://github.com/sauhard22/readme/assets/73341891/b3922e26-bbbf-4017-a6c6-3e6e243cf98b)

## Props

### `src` (`String`, *required*)
The source URL of the image displayed within the component.

### `label` (`String`, *required*)
The label or title associated with the component.

### `content` (`String`, *required*)
Additional descriptive content related to the component.

### `id` (`String`, *required*)
A unique identifier for the component, used for radio button selection.

### `handleChange` (`Function`, *optional*)
A function that handles the change event when the radio button is selected.

##### Example

```bash
const types = [
    {
        label: "Embedded Form",
        content: "Create a form to embed on your website",
        src: "../src/assets/embedded.png",
        id: "embeded_form"
    },
    {
        label: "Landing Page",
        content: "Create a landing page with a form",
        src: "../src/assets/landing.png",
        id: "landing_page"
    },
    {
        label: "Popup Form",
        content: "Add a form that pops up as a box",
        src: "../src/assets/pop_up.png",
        id:"popup_form"
    }
]

<TypeCard v-for="(item, i) in types" :src="item.src" :content="item.content" :label="item.label" :id="item.id" :key="i" />
```

