# joins
!不知道翻译成什么，加入？但是根据功能来看是等待该线程终止。

该`join`方法允许一个线程等待另一个线程的完成。如果t是Thread线程,当前正在执行的对象
```java
t.join();
```
导致当前线程暂停执行直到t线程终止。可以指定等待时间，但是，与此相对sleep，join它取决于操作系统的时序，所以您不应该假设这join将等待您指定的时间。

还是推荐使用sleep，加入响应一个中断退出的interruptedexception