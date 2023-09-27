import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform, usePlatforms } from "../hooks/use-platforms";

interface Props {
  selectedPlatform?: Platform;
  onSelect?: (platform: Platform) => void;
}

export function PlatformSelector({ selectedPlatform, onSelect }: Props) {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>

      <MenuList>
        {data?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelect && onSelect(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
