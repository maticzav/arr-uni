import test from 'ava'
import u from './'

test('Union of multiple arrays.', t => {
  const a = {foo: 1, bar: {zoo: 1}}
  const b = {foo: 1}
  const c = {foo: 1, bar: 1}
  const d = {foo: 1, bar: 2}
  const e = {zoo: 1, bar: { foo: 'abc'}}

  t.deepEqual(u([a, b, c], [c, d], [a, e]), [a, b, c, d, e])
})

test('Union of arrays in array.', t => {
  const a = {foo: 1, bar: {zoo: 1}}
  const b = {foo: 1}
  const c = {foo: 1, bar: 1}
  const d = {foo: 1, bar: 2}
  const e = {zoo: 1, bar: { foo: 'abc'}}

  t.deepEqual(u([[a, b, c], [c, d], [a, e]]), [a, b, c, d, e])
})

test.failing('Error test', () => {
  const a = {foo: 1, bar: {zoo: 1}}
  const b = {foo: 1}
  const c = {foo: 1, bar: 1}
  const d = {foo: 1, bar: 2}
  const e = {zoo: 1, bar: { foo: 'abc'}}

  u([[a, b, c, d], 'a', [a, e]])
})
