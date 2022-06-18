import { MdAdd, MdInbox } from "react-icons/md";
import {
  Box,
  Button,
  Flex,
  LinkBox,
  LinkOverlay,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MENU_ITEMS } from "../../../constants";

const Sidebar = () => {
  return (
    <Box>
      <Box mt={4} px={2}>
        <Button sx={styles.composeButton}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <MdAdd size={30} />
            <Text>Compose</Text>
          </Stack>
        </Button>
      </Box>
      <Box mt={4}>
        <List spacing={2} color="gray.600">
          {MENU_ITEMS.map(({ url, title, Icon, nestedLinks }) => (
            <ListItem key={title} sx={styles.listItem(url)}>
              <LinkBox>
                <NextLink href="/home" passHref>
                  <LinkOverlay>
                    <Flex alignItems="center" justifyContent="space-between">
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Icon size={25} />
                        <Text>{title}</Text>
                      </Stack>
                      <Box>
                        <Text>3</Text>
                      </Box>
                    </Flex>
                  </LinkOverlay>
                </NextLink>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

const isMenuItemActive = (path: string): boolean => {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";
  return currentPath.startsWith(path);
};

const styles = {
  listItem: (path: string) => ({
    bg: isMenuItemActive(path) ? "brand.200" : "transparent",
    color: isMenuItemActive(path) ? "brand.800" : undefined,
    borderRightRadius: "32px",
    padding: "4px 16px 4px 8px",
    "&:hover": {
      bg: isMenuItemActive(path) ? "brand.200" : "gray.200",
      transition: "all 0.2s ease-in-out",
    },
  }),
  composeButton: {
    display: "flex",
    alignItems: "center",
    padding: "12px 20px 12px 12px",
    width: "126px",
    height: "48px",
    background: "#FFFFFF",
    boxShadow:
      "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.15)",
    borderRadius: "40px",
  },
};

export default Sidebar;
