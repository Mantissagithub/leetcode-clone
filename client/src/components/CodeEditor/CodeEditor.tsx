import React, { useState, useEffect, useRef } from 'react';
import CM, { Controlled as ControlledComponent } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/clike/clike';
import '@uiw/react-codemirror/dist.css';
import { languageNameToMode } from '../../utils/languageUtils';
import { Language } from '../../constants/routes';
import { CodeEditorProps } from './CodeEditor.types';
import setupCodeMirror from './codeMirrorSetup';

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  theme,
  height,
  width,
  value,
  setValue,
  readOnly,
}) => {
  const cmRef = useRef<ControlledComponent>(null);

  useEffect(() => {
    if (!cmRef.current) {
      return;
    }

    setupCodeMirror({
      instance: cmRef.current,
      mode: languageNameToMode(language),
      theme: theme ?? 'material',
    });
  }, [language, theme]);

  useEffect(() => {
    if (!cmRef.current) {
      return;
    }

    cmRef.current.setValue(value ?? '');
  }, [value]);

  return (
    <ControlledComponent
      options={{
        autoCloseBrackets: true,
        indentUnit: 2,
        tabSize: 2,
        mode: languageNameToMode(language),
        theme: theme ?? 'material',
        readOnly,
      }}
      value={value ?? ''}
      innerRef={cmRef}
      onBeforeChange={(_editor, _data, value) => setValue(value)}
      height={height}
      width={width}
    />
  );
};

export default CodeEditor;