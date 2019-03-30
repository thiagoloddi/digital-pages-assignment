import React from 'react';
import injectSheet from 'react-jss';
import strftime from 'strftime';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CharacterThumb from './CharacterThumb';

const time = strftime.localizeByIdentifier('pt_BR');

const styles = {
  table: {
    '& td, & th': {
      fontSize: '14px'
    }
  },
  name: {
    width: '300px'
  },
  modified: {
    width: '200px'
  },
  row: {
    '&:hover': {
      backgroundColor: '#f5f5f5',
      cursor: 'pointer'
    }
  }
}

const CharactersList = ({ characters, classes, onRowClick }) => {
  const renderBody = () => {
    return characters.map(({ id, name, description, modified, thumbnail: { path, extension } }) => (
      <TableRow onClick={onRowClick} id={id} className={classes.row} key={id}>
        <TableCell className={classes.name}><CharacterThumb name={name} src={`${path}.${extension}`}/></TableCell>
        <TableCell>{description || "-"}</TableCell>
        <TableCell align="center">{modified ? time("%d/%m/%y - %H:%M", new Date(modified)) : "-"}</TableCell>
      </TableRow>
    ));
  }

  return (
    <div>
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell >Descrição</TableCell>
              <TableCell className={classes.modified} align="center">Última Atualização</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {renderBody()}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default injectSheet(styles)(CharactersList);