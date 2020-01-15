rust: ;RUST_LOG="trace,libp2p=trace,tokio_threadpool=info,tokio_reactor=info,mio=info,tokio_io=info" cargo run

js: npm-install; cd js ; DEBUG="*" node run.js

npm-install: ;cd js; npm install
