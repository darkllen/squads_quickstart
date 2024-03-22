What's changed:
* Using jest instead of mocha (haven't been able to compile ts with mocha)
* run validator with `solana-test-validator --url m --clone-upgradeable-program SQDS4ep65T869zMMBKyuUq6aD6EgTu8psMjkvj52pCf -c BSTq9w3kZwNwpBXJEvTZz2G9ZTNyKBvoSeXMvwb4cNZr` command
* Add missed imports to the file
* Introduce BigInt
* Use multisigCreateV2 instead of deprecated v1