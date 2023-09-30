import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FormEvent, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameFilterStore from "../store/game.store";
import { useNavigate } from "react-router-dom";

export function SearchInput() {
  const navigate = useNavigate();
  const setSearchText = useGameFilterStore((s) => s.setSearchText);

  const ref = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!ref.current) return;

    setSearchText(ref.current.value);
    navigate("/");
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
