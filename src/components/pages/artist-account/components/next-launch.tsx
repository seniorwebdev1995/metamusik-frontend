import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { NextLaunchCard } from "./next-launch-card";
import { Box } from "@mui/material";
import { IProject } from "../../../props/IProject";
import { useBlockchainContext } from "../../../../context";

export const MyAccountNextLaunch = ({projects}:{projects:IProject[]}) => {
  const { translateLang } = useBlockchainContext();

  return (
    <Container
      disableGutters
      sx={{
        marginBottom: 11,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography component="h2" variant="subheadline" marginBottom={3}>
          {translateLang("nextLauch")}
        </Typography>
        <Typography color="#2F98FB" sx={{borderBottom: "1px solid", cursor: "pointer"}} paddingBottom="4px">
          {translateLang("viewMore")}
        </Typography>
      </Stack>
      <Stack>
        {projects?.map((project, index) =>
          <Box key={index}>
            {index === 0 && <Box width="100%" height="1px" bgcolor="#343944"/>}
            <NextLaunchCard data={project} />
          </Box>
        )}
      </Stack>
    </Container>
  );
};
