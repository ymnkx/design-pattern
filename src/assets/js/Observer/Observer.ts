
export default interface Observer<G> {
  update(generator: G): void
}