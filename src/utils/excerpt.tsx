export const excerpt: (text: string, number: number) => string = (text, number) => {
  if (number >= text.length) {
    return text;
  } else {
    const newText = text.slice(0, number);
    const excerptText = `${newText}...`;
    return excerptText;
  }
};
