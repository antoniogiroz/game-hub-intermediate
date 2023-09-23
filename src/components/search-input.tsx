import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

export function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!ref.current) return;

    onSearch(ref.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
}
