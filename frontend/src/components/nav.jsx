import React, { useState } from 'react';
import { Button } from '@mui/material/';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const [follow, setFollow] = useState("Follow");

  function mudar(e) {
    e.preventDefault();
    if (follow === "Follow") {
      console.log("Recebi Follow");
      setFollow("Following");
    } else {
      console.log("Recebi Unfollow");
      setFollow("Follow");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className={`navbar-brand ${location.pathname === '/' && 'active'}`} to="/">
          Home
        </Link>
        <Link style={{color: '#6c757d'}} className={`nav-link ${location.pathname === '/CadastrarCurso' && 'active'}`} to="/CadastrarCurso">
          Cadastrar Curso
        </Link>
        <Link style={{color: '#6c757d'}} className={`nav-link ${location.pathname === '/CadastrarHorario' && 'active'}`} to="/CadastrarHorario">
          Cadastrar Horario
        </Link>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

          <Button
            sx={
              follow === "Follow"
                ? { borderColor: "primary.main", color: "primary.main", border: "1px solid", padding: "5px 14px" }
                : { borderColor: "text.secondary", color: "text.secondary", border: "1px solid", padding: "5px 14px" }
            }
            style={{ borderColor: "primary.main", color: "primary.main", border: "1px solid", padding: "5px 14px" }}
            onClick={mudar}
          >
            {follow}
          </Button>
        </form>
      </div>
    </nav>
  );
}
