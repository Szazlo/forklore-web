import { Box } from "@mui/material";

interface FillAndCenterContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A reusable container that fills up the space it gets and centers its children.
 */
function FillAndCenterContainer({ children, className }: FillAndCenterContainerProps) {
  return (
    <Box sx={fillAndCenterContainerSx} className={className}>
      {children}
    </Box>
  );
}

const fillAndCenterContainerSx = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center'
}

export default FillAndCenterContainer;