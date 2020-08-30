import { Avatar } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

function parseTags(tags) {
  return tags.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur].count++;
      return acc;
    }
    acc[cur] = {
      count: 1,
      active: false,
    };

    return acc;
  }, {});
}

export default function BlogTags({ tags, setTagFilter }) {
  const classes = useStyles();
  const [chips, setChips] = React.useState(parseTags(tags));

  const handleDelete = key => () => {
    chips[key].active = !chips[key].active;
    setChips({ ...chips });
    setTagFilter(key);
  };

  return (
    <Paper className={classes.root}>
      {Object.keys(chips).map(key => {
        const data = chips[key];
        return (
          <Chip
            key={key}
            size="small"
            label={key.toLowerCase()}
            color={data.active ? 'secondary' : 'primary'}
            deleteIcon={data.active ? null : <DoneIcon />}
            onDelete={handleDelete(key)}
            className={classes.chip}
            avatar={<Avatar>{data.count}</Avatar>}
          />
        );
      })}
    </Paper>
  );
}
