import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSortOrder?: string;
  onSelect?: (sortOrder: string) => void;
}

export function SortSelector({ selectedSortOrder, onSelect }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (sortOrder) => sortOrder.value === selectedSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sorting By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.value}
            onClick={() => onSelect && onSelect(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
