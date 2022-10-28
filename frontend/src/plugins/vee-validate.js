import {
  configure,
  defineRule,
  ErrorMessage,
  Form as VeeForm,
  Field as VeeField,
} from "vee-validate";
import {
  alpha_spaces,
  email,
  not_one_of,
  max,
  max_value,
  min,
  min_value,
  required,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);

    defineRule("alpha_spaces", alpha_spaces);
    defineRule("email", email);
    defineRule("max", max);
    defineRule("max_value", max_value);
    defineRule("min", min);
    defineRule("min_value", min_value);
    defineRule("not_one_of", not_one_of);
    defineRule("required", required);

    configure({
      generateMessage: (context) => {
        let { field } = context;

        field = field.charAt(0).toUpperCase() + field.substring(1);

        const messages = {
          alpha_spaces: `${field} may only contain alphabetical characters and spaces`,
          email: `${field} must be a valid email`,
          max: `${field} is too long`,
          max_value: `${field} is too high`,
          min: `${field} is too short`,
          min_value: `${field} is too low`,
          not_one_of: `You are not allowed to use this value`,
          required: `${field} is required`,
        };

        return messages[context.rule.name] ?? `The field ${field} is invaled`;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};
