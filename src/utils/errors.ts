type ErrorDetail = {
  message: string;
  status: number;
  code: string;
};

type ErrorCategory = {
  [key: string]: ErrorDetail;
};

type Errors = {
  [category: string]: ErrorCategory;
};

export const errors: Errors = {
  user: {
    notFound: {
      message: 'User not found',
      status: 404,
      code: 'user/not-found'
    },
    alreadyExists: {
      message: 'User already exists',
      status: 409,
      code: 'user/already-exists'
    },
    notCreated: {
      message: 'User not created',
      status: 500,
      code: 'user/not-created'
    }
  },
  auth: {
    invalidCredentials: {
      message: 'Invalid credentials',
      status: 401,
      code: 'auth/invalid-credentials'
    }
  }
};

export function getErrorByCode(code: string): ErrorDetail {
  const category = code.split('/')[0];
  const errorCategory = errors[category];
  for (const key in errorCategory) {
    if (errorCategory[key].code === code) {
      return errorCategory[key];
    }
  }
  return {
    message: 'Unknown error',
    status: 500,
    code: 'unknown/error'
  };
}