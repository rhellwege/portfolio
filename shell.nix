{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    hello
    just
    nodejs
    bun
  ];
}
