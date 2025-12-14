import { FORM_API } from "../const/values.ts";

const ERROR_TEXT = 'Failed to send message';

/** @throws Error If submission fails. */
export async function submitContactMessage(contactData: FormData) {
  let response = undefined;

  try {
    response = await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: JSON.stringify({
        ...Object.fromEntries(contactData),
        accessKey: FORM_API,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    throw Error(`Unknown browser error: ${ERROR_TEXT} (More details in logs)`);
  }

  if (!response.ok)
    throw Error(`${response.status}: ${response.statusText} - ${ERROR_TEXT}`)
}
