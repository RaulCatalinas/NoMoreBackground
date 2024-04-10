export const $ = (selector: string, context = document) =>
  context.querySelector(selector)
