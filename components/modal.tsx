import { Button, Group, Modal } from "@mantine/core";
import { useState } from "react";



export default function vote() {
  const [opened, setOpened] = useState(true);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <p>HELLO</p>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}