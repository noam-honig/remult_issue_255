import { BackendMethod, Entity, EntityBase, Fields, remult } from 'remult'

@Entity('tasks', { allowApiCrud: true })
export class Task extends EntityBase {
  @Fields.cuid()
  id = ''
  @Fields.string()
  title = ''
  @Fields.boolean()
  completed = false
  @Fields.createdAt()
  createdAt?: Date

  @BackendMethod({ allowed: true })
  async saveAndDo() {
    await this.save()
  }
}

Object.assign(globalThis, { remult, Task })
