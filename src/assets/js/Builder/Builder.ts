

export default abstract class Builder {
  public abstract open():void
  public abstract setTitle(title:string):void
  public abstract setAuthor(author:string):void
  public abstract close():void
}