// src/sections/SolutionForm.tsx
import React, { ChangeEventHandler, FC } from 'react';

type SolutionFormData = {
  language: string;
  code: string;
};

type SolutionFormProps = {
  onSubmit: (data: SolutionFormData) => void | Promise<void>;
  languages: Array<string>;
  loading: boolean;
};

const SolutionForm: FC<SolutionFormProps> = ({ onSubmit, languages, loading }) => {
  const [language, setLanguage] = React.useState('');
  const [code, setCode] = React.useState('');

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setCode(event.currentTarget.value);
  };

  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setLanguage(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ language, code });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-md shadow-sm">
        <label htmlFor="language" className="sr-only">
          Language
        </label>
        <select
          disabled={loading}
          onChange={handleSelect}
          value={language}
          id="language"
          name="language"
          autoComplete="off"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" hidden>
            Select a programming language
          </option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>
      <div className="rounded-md shadow-sm">
        <label htmlFor="code" className="sr-only">
          Code
        </label>
        <textarea
          disabled={loading}
          onChange={handleChange}
          value={code}
          rows={10}
          cols={50}
          id="code"
          name="code"
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          disabled={loading}
          type="submit"
          className="w-32 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SolutionForm;