// This file is shared across the demos.

import React, { Children } from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";
import StarBorder from "@material-ui/icons/StarBorder";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";

export const mailFolderListItems = (
  <div>
    <ListItem button component="a" href="/Registrarse">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Registrarse" />
    </ListItem>
    <ListItem button component="a" href="/MisEventos">
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Mis Eventos" />
    </ListItem>
    <ListItem button component="a" href="/Cotizar">
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Cotizar" />
    </ListItem>
    <ListItem button component="a" href="/MiAgenda">
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Mi Agenda" />
    </ListItem>
    <ListItem button component="a" href="/Proveedores">
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Proveedores" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button component="a" href="/MiPerfil">
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Mi Perfil" />
    </ListItem>
    <ListItem button component="a" href="/Configuracion">
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Configuracion" />
    </ListItem>
  </div>
);
