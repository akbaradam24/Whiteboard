import { forwardRef } from "react";
import {
  Group,
  Avatar,
  Text,
  MultiSelect,
  Box,
  CloseButton,
} from "@mantine/core";
import profile1 from "../../Assets/Icons/profile sample 1.png";
import profile2 from "../../Assets/Icons/profile sample 2.png";
import profile3 from "../../Assets/Icons/profile sample 3.png";
import profile from "../../Assets/Icons/default pofile picture.png";

function Value({ image, value, label, onRemove, ...others }) {
  return (
    <div {...others}>
      <Box
        sx={(theme) => ({
          display: "flex",
          cursor: "default",
          alignItems: "center",
          paddingLeft: 10,
        })}
      >
        <div style={{ marginRight: 5 }}>
          <img src={image} alt="label icon" />
        </div>
        <CloseButton
          onMouseDown={onRemove}
          variant="transparent"
          size={22}
          iconSize={14}
          tabIndex={-1}
        />
      </Box>
    </div>
  );
}

const data = [
  {
    image: profile1,
    label: "Adam Akbar",
    value: "Adam Akbar",
  },

  {
    image: profile2,
    label: "Fakhri Al Fatah",
    value: "Fakhri Al Fatah",
  },
  {
    image: profile3,
    label: "Hamdani Abdullah",
    value: "Hamdani Abdullah",
  },
  {
    image: profile,
    label: "John Doe",
    value: "John Doe",
  },
];

// !important: Forwarding ref is required
const SelectItem = forwardRef(({ image, label, ...others }, ref) => {
  return (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />
        <div>
          <Text>{label}</Text>
        </div>
      </Group>
    </div>
  );
});

function InputMember() {
  return (
    <MultiSelect
      size="sm"
      sx={() => ({ flex: 1 })}
      zIndex={9999}
      placeholder="Pick member"
      data={data}
      itemComponent={SelectItem}
      searchable
      valueComponent={Value}
      // filter={(value, selected, item) =>
      //   !selected &&
      //   (item.label.toLowerCase().includes(value.toLowerCase().trim()))
      // }
    />
  );
}

export default InputMember;
