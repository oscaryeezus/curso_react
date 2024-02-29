import React from "react";
import NavigationBar from "./NavigationBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import data from "../data/employees 1.json";
import Grid from "@mui/material/Grid";

const Home = () => {
  function stringToColor(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 150,
        height: 150,
        fontSize: 80,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <div>
      <NavigationBar />
      <Grid container spacing={2} sx={{ width: "98%", p: 2 }}>
        {data.Employees.map((employee, index) => (
          <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={index}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ display: "flex", justifyContent: "center", pt: 2 }}
                >
                  <Avatar {...stringAvatar(employee.Name)} />
                </Stack>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {employee.Name}
                  </Typography>
                  {employee.Skills.map((skill, index) => (
                    <Typography
                      key={index}
                      gutterBottom
                      variant="body1"
                      component="div"
                    >
                      Skills: {skill}
                    </Typography>
                  ))}
                  <Typography variant="body2" color="text.secondary">
                    Skillspot: {employee.Spot}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Contract: {employee.Contract.Name}
                  </Typography>
                  {employee.Documents.map((document, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      color="text.secondary"
                    >
                      {document.Name}, Expiration: {document.Expiration}
                    </Typography>
                  ))}
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
