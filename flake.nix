{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs }: 
  let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in
  {
    # define development environment
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = [
        pkgs.nodejs
        pkgs.bun
      ];

      shellHook = ''
      '';
    };
    
  };
}
