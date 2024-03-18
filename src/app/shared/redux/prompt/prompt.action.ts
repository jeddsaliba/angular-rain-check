import { createAction } from "@ngrx/store";
import { PromptType } from "./prompt.type";

export const showPrompt = createAction(
    PromptType.PROMPT,
    (payload: any) => ({
        payload,
    })
);