
export const initiateState = (key_name: string, default_value: any) => {
    const state = localStorage.getItem(key_name);
    if (state) {
      return JSON.parse(state);
    }
    return default_value;
  }