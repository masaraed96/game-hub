import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSortOrderChanged: (sortOrder: string) => void;
  sortValue: string;
}
const SortOrderSelector = ({ onSortOrderChanged, sortValue }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevence" },
    { value: "-released", label: "Date released" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-rating", label: "Average rating" },
    { value: "-metacritic", label: "Popularity" },
  ];

  const sortOrderLabel = sortOrders.find((o) => sortValue === o.value)?.label;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortOrderLabel || "Relevence"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            value={order.value}
            key={order.value}
            onClick={() => onSortOrderChanged(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortOrderSelector;
