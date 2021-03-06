# 总结/概要

java.time 包中包含很多类，你的程序可以用来表示时间和日期。这是一个非常丰富的 API。基于 ISO 日期的关键入口点如下：

* Instant 提供了时间轴的机器视图。
* LocalDate, LocalTime, and LocalDateTime 提供了日期和时间的人类视图，不包含时区。
* ZoneId, ZoneRules, and ZoneOffset 描述了时区、时区规则和时区偏移。
* ZonedDateTime 表示日期和时间与时区；OffsetDateTime和OffsetTime 类分别表示日期和时间，或者时间。这些类考虑了时区偏移量。
* Duration 测量日、时、分、秒、毫秒、纳秒的时间量
* Period 测量年、月、日的时间量

其他非 ISO 日历系统可以使用 java.time.chrono 包来表示。虽然 [非ISO日期转换页面](./nonIso.md)
提供了有关将基于 ISO 的日期转换为其他日历系统的信息，但此包不在本教程的讨论范围内 。

Date Time API 是基于 JSR 310 开发的。有关更多信息，请参阅 [ JSR 310: Date and Time API.](https://jcp.org/en/jsr/detail?id=310)
