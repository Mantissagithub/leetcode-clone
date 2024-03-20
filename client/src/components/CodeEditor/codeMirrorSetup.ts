import { EditorFromTextArea } from 'codemirror';
import { langExtensions } from '@codemirror/language';
import javascript from '@codemirror/lang-javascript';

/**
 * Sets up the CodeMirror instance based on provided parameters.
 * @param instance A controlled component of CodeMirror.
 * @param mode Mode identifier derived from programming language.
 * @param theme Theme identifier for changing the CodeMirror appearance.
 */
function setupCodeMirror({ instance, mode, theme }: { instance: EditorFromTextArea; mode: string; theme: string }) {
  instance.setOption('extraKeys', {
    Tab: (_instance) => {
      const spaces = Array(instance.getTabSize() + 1).join(' ');
      _instance.replaceSelection(spaces);
    },
  });

  instance.setOption('lineNumbers', true);

  instance.display.wrapper.classList.add('border');
  instance.display.wrapper.classList.add('rounded-md');
  instance.display.wrapper.classList.add('shadow-sm');

  instance.configure({
    autocorrect: false,
    autocomplete: false,
    lint: false,
    smartIndent: false,
  });

  instance.clearHistory();

  if (mode) {
    langExtensions.load(javascript());
    instance.setOption('mode', mode);
  }

  instance.setOption('theme', theme);
}

// Utility functions to convert between language names and modes.
export default function languageNameToMode(language: Language): string | undefined {
  // Implement conversion logic for different languages here.
  // Currently only supporting Javascript.
  if (language === Language.JAVASCRIPT) {
    return 'text/javascript';
  }

  return undefined;
}