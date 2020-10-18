const isEmpty = value => value === undefined || value === null || value === '';
const join = (rules) => (value, data) => rules.map(rule => rule(value, data)).filter(error => !!error)[0];

export const required = (value) => {
  if (isEmpty(value)) {
    return 'Required';
  }
}

export const minLength = (min) => {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `Must be at least ${min} characters`;
    }
  };
}

export const maxLength = (max) => {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `Must be no more than ${max} characters`;
    }
  };
}

export const integer = (value) => {
  if (!Number.isInteger(Number(value))) {
    return 'Must be an integer';
  }
}

export const currency = (value) => {
  if (!isEmpty(value) && !/^(?=.*[1-9])\d{0,20}(\.\d{1,2})?$/i.test(value)) {
    return 'Invalid currency format'
  }
}

export const oneOf = (enumeration) => {
  return value => {
    if (!~enumeration.indexOf(value)) {
      return `Must be one of: ${enumeration.join(', ')}`;
    }
  };
}

export const match = (field) => {
  return (value, data) => {
    if (data) {
      if (value !== data[field]) {
        return 'Do not match';
      }
    }
  };
}

export const createValidator = (rules) => {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach((key) => {
      const rule = join([].concat(rules[key]));
      const error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
}