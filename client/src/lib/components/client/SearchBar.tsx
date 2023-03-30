"use client";

type SearchBarProps = {
  onChange: (value: string) => void;
};

export const SearchBar = (props: SearchBarProps) => {
  return (
    <input
      type="text"
      placeholder="Rechercher"
      className="w-full px-3 py-2 rounded-full bg-blue-lighter text-primary"
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};
