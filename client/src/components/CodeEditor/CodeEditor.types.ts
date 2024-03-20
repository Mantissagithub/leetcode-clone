import { ChangeEventHandler, FC } from 'react';

export interface CodeEditorProps {
  /** Programming language used for syntax highlighting. */
  language: Language;

  /** Optional theme identifier for altering the CodeMirror appearance. */
  theme?: string;

  /** Height of the editor area. */
  height: number | string;

  /** Width of the editor area. */
  width: number | string;

  /** Initial value displayed within the editor. */
  value?: string;

  /** Function called whenever the user modifies the code. */
  onChange: ChangeEventHandler<HTMLTextAreaElement>;

  /** Disables editing capabilities. */
  readOnly?: boolean;
}

export type Props = FC<CodeEditorProps>;