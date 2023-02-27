import {Card, Grid, IconButton, Skeleton, Typography} from "@mui/material";
import {BookmarkBorder, CommentOutlined, FavoriteBorder, Loop} from "@mui/icons-material";

export default function PostSkeleton() {
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item>
          <Skeleton variant="circular" width="50px" height="50px" />
        </Grid>
        <Grid item>
          <Skeleton variant="rectangular" width="100%" height="10px" />
        </Grid>
      </Grid>
      <Typography variant="body1" my={2}>
        <Skeleton variant="rectangular" sx={{borderRadius: "12px"}}/>
      </Typography>
      <Skeleton variant="rectangular" width="100%" height="200px" sx={{borderRadius: "12px"}}/>
      <Typography variant="body2" color="text.secondary" fontSize="12px" textAlign="right">
        {`${449} Comments \t ${59}k Retweets \t ${234} Saves`}
      </Typography>
      <Grid container mt={1} justifyContent="space-around" alignItems="center">
        <Grid item>
          <IconButton>
            <CommentOutlined/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <Loop/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <FavoriteBorder/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <BookmarkBorder/>
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
}